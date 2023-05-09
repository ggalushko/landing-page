type Props = {
  imgSrc: string;
  imgCaption: string;
  header: string;
  text: string;
};

export function ShowcaseCard({ imgSrc, imgCaption, header, text }: Props) {
  return (
    <div className="flex flex-col w-[350px] gap-4">
      <img
        className="h-[200px] mb-4 rounded-4xl bg-white bg-center object-cover"
        src={imgSrc}
        alt={imgCaption}
      ></img>
      <p className="font-semibold text-shadowed">{imgCaption}</p>
      <h3 className="text-2xl sm:text-3xl font-bold">{header}</h3>
      <p className="text-secondary text-xl">{text}</p>
    </div>
  );
}
