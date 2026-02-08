"use client";

import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";
import type { Comment } from "@/types";
import { Card } from "../ui";
import { Heading } from "../dashboard";

interface CommentsSectionProps {
  comments: Comment[];
}

export function CommentsSection({ comments }: CommentsSectionProps) {
  return (
    <Card className="p-6 flex flex-col gap-4">
      <Heading title="Comments" />

      <div className="flex flex-col gap-4">
        {comments.map(comment => (
          <div key={comment.id} className="p-3 border border-gray-200 rounded-xl">
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8 bg-slate-100 shrink-0">
                <AvatarFallback className="bg-gray-100! text-sm text-gray-700 font-bold">{comment.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-800">{comment.user.name}</span>
                  <span className="text-xs text-slate-400">{comment.timestamp}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{comment.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <textarea
          className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent min-h-[100px] resize-none mb-3"
          placeholder="Type your comment here..."
        />
        <Button size="sm" className="bg-[#1e3a5f] hover:bg-[#152d4a] text-white">
          <Send className="w-3 h-3 mr-2" />
          Post Comment
        </Button>
      </div>
    </Card>
  );
}
