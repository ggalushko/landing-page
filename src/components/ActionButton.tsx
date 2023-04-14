function ActionButton(props: { text: string }) {
  return (
    <a href="#pricing" className="w-fit">
      <button className="w-36 p-3 bg-button rounded-md my-3 text-xl font-semibold 
      hover:scale-105 transition-transform duration-500">
        {props.text}
      </button>
    </a>
  );
}

export default ActionButton;
