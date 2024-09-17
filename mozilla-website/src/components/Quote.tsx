type QuoteProps = {
  content: string;
  author: string;
};

export const Quote = ({ content, author }: QuoteProps) => {
  return (
    <div className="bg-quote-gradient py-12 px-6 md:px-16 xl-2:px-20">
      <blockquote className="px-6 text-center">
        <p className="mb-2 text-xl">“{content}”</p>
        <cite className="not-italic font-bold text-lg">{author}</cite>
      </blockquote>
    </div>
  );
};
