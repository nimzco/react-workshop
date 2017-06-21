let count = 10;
let hasFire = (count > 99);

const badge = (
  <span className="badge">
    {count > 99 ? '99+' : count}
  </span>
);

const bell = (
  <div className={`bell ${hasFire ? 'has-fire' : ''}`}>
    {count > 0 ? badge : null}
  </div>
);
