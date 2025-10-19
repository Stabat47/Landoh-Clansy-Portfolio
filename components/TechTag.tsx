export default function TechTag({ name }: { name: string }) {
  return (
    <span className="text-xs px-2 py-1 bg-gray-800 border border-gray-700 rounded-md text-gray-300">
      {name}
    </span>
  );
}
