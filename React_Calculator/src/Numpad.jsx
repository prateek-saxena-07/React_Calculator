export const Numpad = ({ id, onClick, val }) => {
  return (
    <button id={id} onClick={onClick} className="button numpad-button">
      {val}
    </button>
  );
};
