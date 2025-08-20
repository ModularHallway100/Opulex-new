"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, MessageSquare } from 'lucide-react';
import ChatInterface from './chat-interface';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
            size="icon" 
            className="w-16 h-16 rounded-full shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <MessageSquare className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </div>
      {isOpen && <ChatInterface onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatWidget;
