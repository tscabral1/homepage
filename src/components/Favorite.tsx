type Favorite = {
  url: string;
  title: string;
  icon: any;
  color: string;
};

export default function Favorite({ url, title, icon, color }: Favorite) {
  return (
    <div>
      <a href={url} className="flex flex-row text-white items-center">
      <span className={`text-xl px-2 ${color}`}>{icon}</span>
      {title}
      </a>
    </div>
  );
}
