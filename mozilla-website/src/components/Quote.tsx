type QuoteProps = {
  quote: string;
  author: string;
};

export const Quote = ({ quote, author }: QuoteProps) => {
  return (
    <div className="container-padding bg-quote-gradient">
      <blockquote className="px-6 text-center">
        <p className="mb-2 text-xl">“{quote}”</p>
        <cite className="not-italic font-bold text-lg">{author}</cite>
      </blockquote>
    </div>
  );
};
