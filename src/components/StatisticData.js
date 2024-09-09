export default function StatisticData({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packaging</em>
      </p>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got eveithing! You are ready to go ✈️!"
          : `💼 You have ${numItem} items on your list. You already packed ${numPacked}
        (${percentage}%)`}
      </em>
    </footer>
  );
}
