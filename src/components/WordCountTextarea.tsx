import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface WordCountTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxWords?: number;
}

const countWords = (text: string) =>
  text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

const WordCountTextarea = React.forwardRef<HTMLTextAreaElement, WordCountTextareaProps>(
  ({ maxWords = 150, className, onChange, value, defaultValue, ...props }, ref) => {
    const [wordCount, setWordCount] = React.useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setWordCount(countWords(e.target.value));
      onChange?.(e);
    };

    const isOver = wordCount > maxWords;

    return (
      <div>
        <Textarea
          ref={ref}
          className={cn(isOver && "border-destructive", className)}
          onChange={handleChange}
          {...props}
        />
        <p className={cn("text-xs mt-1 text-right", isOver ? "text-destructive" : "text-muted-foreground")}>
          {wordCount} / {maxWords} words
        </p>
      </div>
    );
  }
);

WordCountTextarea.displayName = "WordCountTextarea";

export { WordCountTextarea, countWords };
