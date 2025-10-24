interface CardProps {
  tag: string;
  title: string;
  explanation: string;
  image: React.ReactNode;
  order: 1 | 2;
}

const Card = ({
  tag,
  title,
  explanation,
  image,
  order=1,
}:CardProps) => {
  return (
    <div>
      <div>
        {image}
      </div>
      <div>
        <span>{tag}</span>
        <h1>{title}</h1>
        <span>{explanation}</span>
      </div>
    </div>
  )
}