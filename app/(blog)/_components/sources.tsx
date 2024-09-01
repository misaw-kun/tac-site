type Source = {
  text: string;
  url: string;
};

type SourcesProps = {
  sources: Source[];
};

export function Sources({ sources }: SourcesProps) {
  return (
    <div className="sources mt-8">
      <h2 className="text-2xl mb-4">Sources</h2>
      {sources.length > 0 ? (
        <ul className="list-decimal ml-5">
          {sources.map((source, index) => (
            <li key={index} className="mb-2">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:text-secondary transition-colors duration-200"
              >
                {source.text}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sources available for this post.</p>
      )}
    </div>
  );
}
