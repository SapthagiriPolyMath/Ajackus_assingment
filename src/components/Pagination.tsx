type Props = {
  total: number;
  page: number;
  limit: number;
  setPage: (p: number) => void;
  setLimit: (l: number) => void;
};

export function Pagination({ total, page, limit, setPage, setLimit }: Props) {
  const pages = Math.max(1, Math.ceil(total / limit));
  return (
    <div className="pagination">
      <label>Per page</label>
      <select value={limit} onChange={e => setLimit(Number(e.target.value))}>
        {[10, 25, 50, 100].map(n => <option key={n} value={n}>{n}</option>)}
      </select>
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
      <span>{page} / {pages}</span>
      <button disabled={page >= pages} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
