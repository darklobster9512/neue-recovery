import { useState, useEffect } from 'react';
import { LogOut, Search, Filter, Eye, Calendar, User, Mail, Phone, MessageSquare, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { AdminSettings } from '@/components/AdminSettings';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

interface ContactMessage {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  topic: string;
  damage_amount?: string;
  message: string;
  consent: boolean;
  source: string;
  status: string;
  spam_score: number;
  submit_duration?: number;
  updated_at: string;
}

export default function Admin() {
  const { signOut } = useAuth();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [topicFilter, setTopicFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  useEffect(() => {
    fetchMessages();
    setupRealtimeSubscription();
  }, []);

  useEffect(() => {
    filterMessages();
  }, [messages, searchTerm, statusFilter, topicFilter]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Fehler beim Laden der Nachrichten');
    } finally {
      setLoading(false);
    }
  };

  const setupRealtimeSubscription = () => {
    const channel = supabase
      .channel('contact_messages_changes')
      .on('postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'contact_messages' 
        }, 
        (payload) => {
          const newMessage = payload.new as ContactMessage;
          setMessages(prev => [newMessage, ...prev]);
          toast.success(`Neue Kontaktanfrage von ${newMessage.name}!`);
        }
      )
      .on('postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'contact_messages'
        },
        (payload) => {
          const updatedMessage = payload.new as ContactMessage;
          setMessages(prev => prev.map(msg => 
            msg.id === updatedMessage.id ? updatedMessage : msg
          ));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const filterMessages = () => {
    let filtered = messages;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(msg =>
        msg.name.toLowerCase().includes(term) ||
        msg.email.toLowerCase().includes(term) ||
        msg.message.toLowerCase().includes(term) ||
        msg.topic.toLowerCase().includes(term)
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(msg => msg.status === statusFilter);
    }

    if (topicFilter !== 'all') {
      filtered = filtered.filter(msg => msg.topic === topicFilter);
    }

    setFilteredMessages(filtered);
  };

  const updateMessageStatus = async (messageId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status: newStatus })
        .eq('id', messageId);

      if (error) throw error;
      
      toast.success('Status erfolgreich aktualisiert');
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Fehler beim Aktualisieren des Status');
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      new: { label: 'Neu', variant: 'default' as const },
      in_progress: { label: 'In Bearbeitung', variant: 'secondary' as const },
      completed: { label: 'Abgeschlossen', variant: 'outline' as const },
      spam: { label: 'Spam', variant: 'destructive' as const }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || { label: status, variant: 'default' as const };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getTopicLabel = (topic: string) => {
    const topicLabels = {
      cybercrime: 'Cybercrime/Betrug',
      kryptonachverfolgung: 'Kryptonachverfolgung',
      wertpapier: 'Wertpapier/Kapitalmarkt',
      datenschutz: 'Datenschutz',
      immobilienrecht: 'Immobilienrecht',
      sonstiges: 'Sonstiges'
    };
    
    return topicLabels[topic as keyof typeof topicLabels] || topic;
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'dd.MM.yyyy HH:mm', { locale: de });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <div className="text-lg">Lade Admin-Panel...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Header */}
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <Button onClick={signOut} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Abmelden
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="messages" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Kontaktanfragen
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Einstellungen
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="messages" className="space-y-6">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{messages.length}</div>
              <div className="text-sm text-muted-foreground">Gesamt Nachrichten</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                {messages.filter(m => m.status === 'new').length}
              </div>
              <div className="text-sm text-muted-foreground">Neue Nachrichten</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                {messages.filter(m => m.status === 'in_progress').length}
              </div>
              <div className="text-sm text-muted-foreground">In Bearbeitung</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                {messages.filter(m => m.status === 'completed').length}
              </div>
              <div className="text-sm text-muted-foreground">Abgeschlossen</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="glass-card mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter & Suche
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status filtern" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Status</SelectItem>
                  <SelectItem value="new">Neu</SelectItem>
                  <SelectItem value="in_progress">In Bearbeitung</SelectItem>
                  <SelectItem value="completed">Abgeschlossen</SelectItem>
                  <SelectItem value="spam">Spam</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={topicFilter} onValueChange={setTopicFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Thema filtern" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Themen</SelectItem>
                  <SelectItem value="cybercrime">Cybercrime/Betrug</SelectItem>
                  <SelectItem value="kryptonachverfolgung">Kryptonachverfolgung</SelectItem>
                  <SelectItem value="wertpapier">Wertpapier/Kapitalmarkt</SelectItem>
                  <SelectItem value="datenschutz">Datenschutz</SelectItem>
                  <SelectItem value="immobilienrecht">Immobilienrecht</SelectItem>
                  <SelectItem value="sonstiges">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Messages Table */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Kontaktanfragen ({filteredMessages.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Datum</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Thema</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Schadenshöhe</TableHead>
                    <TableHead>Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMessages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell className="font-medium">
                        {formatDate(message.created_at)}
                      </TableCell>
                      <TableCell>{message.name}</TableCell>
                      <TableCell>{message.email}</TableCell>
                      <TableCell>{getTopicLabel(message.topic)}</TableCell>
                      <TableCell>
                        <Select 
                          value={message.status} 
                          onValueChange={(value) => updateMessageStatus(message.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue>{getStatusBadge(message.status)}</SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">Neu</SelectItem>
                            <SelectItem value="in_progress">In Bearbeitung</SelectItem>
                            <SelectItem value="completed">Abgeschlossen</SelectItem>
                            <SelectItem value="spam">Spam</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        {message.damage_amount || '-'}
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedMessage(message)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Kontaktanfrage Details</DialogTitle>
                            </DialogHeader>
                            {selectedMessage && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium">Name</label>
                                    <div className="flex items-center gap-2 mt-1">
                                      <User className="w-4 h-4 text-muted-foreground" />
                                      <span>{selectedMessage.name}</span>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">E-Mail</label>
                                    <div className="flex items-center gap-2 mt-1">
                                      <Mail className="w-4 h-4 text-muted-foreground" />
                                      <span>{selectedMessage.email}</span>
                                    </div>
                                  </div>
                                  {selectedMessage.phone && (
                                    <div>
                                      <label className="text-sm font-medium">Telefon</label>
                                      <div className="flex items-center gap-2 mt-1">
                                        <Phone className="w-4 h-4 text-muted-foreground" />
                                        <span>{selectedMessage.phone}</span>
                                      </div>
                                    </div>
                                  )}
                                  <div>
                                    <label className="text-sm font-medium">Datum</label>
                                    <div className="flex items-center gap-2 mt-1">
                                      <Calendar className="w-4 h-4 text-muted-foreground" />
                                      <span>{formatDate(selectedMessage.created_at)}</span>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Thema</label>
                                    <div className="mt-1">
                                      <Badge variant="secondary">
                                        {getTopicLabel(selectedMessage.topic)}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Status</label>
                                    <div className="mt-1">
                                      {getStatusBadge(selectedMessage.status)}
                                    </div>
                                  </div>
                                  {selectedMessage.damage_amount && (
                                    <div className="col-span-2">
                                      <label className="text-sm font-medium">Schadenshöhe</label>
                                      <div className="mt-1">{selectedMessage.damage_amount}</div>
                                    </div>
                                  )}
                                </div>
                                
                                <div>
                                  <label className="text-sm font-medium flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" />
                                    Nachricht
                                  </label>
                                  <div className="mt-2 p-4 bg-muted/50 rounded-lg">
                                    {selectedMessage.message}
                                  </div>
                                </div>
                                
                                <div className="text-sm text-muted-foreground">
                                  <div>Quelle: {selectedMessage.source}</div>
                                  <div>Spam-Score: {selectedMessage.spam_score}</div>
                                  {selectedMessage.submit_duration && (
                                    <div>Ausfüllzeit: {selectedMessage.submit_duration}ms</div>
                                  )}
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {filteredMessages.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Keine Nachrichten gefunden.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}