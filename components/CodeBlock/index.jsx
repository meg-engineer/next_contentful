import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeBlock({
  node,
  className,
  inline,
  children,
  ...props
}) {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
      {children[0].replace(/\n$/i, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props} />
  );
}
