import { ChangeEvent, useState } from "react";

type EditorProps = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
};

const Editor = ({ handleInputChange, handleSave }: EditorProps) => {
  return (
    <div>
      <p>Name: </p>
      <input
        style={{ border: "1px solid #eee" }}
        onChange={handleInputChange}
      ></input>
      <button style={{ border: "1px solid #eee" }} onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

type DisplayValueProps = {
  displayValue: string;
  shouldBeYellow: boolean;
  id: number;
  handleClick: (value: number) => void;
  handleRemove: (value: number) => void;
};

const DisplayValue = ({
  displayValue,
  handleClick,
  handleRemove,
  shouldBeYellow,
  id,
}: DisplayValueProps) => {
  return (
    <div className="flex">
      <p
        className={`border w-24 h-24 ${
          shouldBeYellow ? "bg-yellow-300" : "bg-red-700"
        }`}
        onClick={() => handleClick(id)}
      >
        {displayValue}
      </p>
      <p
        className="border hover:bg-red-500 w-24 h-12 bg-red-300"
        onClick={() => handleRemove(id)}
      >
        Delete
      </p>
    </div>
  );
};

type DisplayValueType = {
  value: string;
  shouldBeYellow: boolean;
  id: number;
};

const ShoppingList = () => {
  const [shouldShowEditor, setShouldShowEditor] = useState(false);
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [displayValues, setDisplayValues] = useState<DisplayValueType[]>([]);

  const handleShowEditor = () => setShouldShowEditor((s) => !s);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue) {
      const id = Math.floor(Math.random() * 1000000);
      setDisplayValues([
        ...displayValues,
        {
          value: inputValue,
          shouldBeYellow: true,
          id,
        },
      ]);
    }
  };

  const handleColorDisplayValue = (idToColor: number) => {
    const newDisplayValues = displayValues.map((displayValue) => {
      if (displayValue.id === idToColor) {
        return {
          value: displayValue.value,
          shouldBeYellow: !displayValue.shouldBeYellow,
          id: displayValue.id,
        };
      }
      return displayValue;
    });

    setDisplayValues(newDisplayValues);
  };

  const handleRemoveDisplayValue = (idToRemove: number) => {
    const newDisplayValues = displayValues.filter(
      (displayValues) => displayValues.id !== idToRemove
    );
    setDisplayValues(newDisplayValues);
  };

  return (
    <div className="m-10">
      <div className="mb-4">
        <button style={{ border: "1px solid #eee" }} onClick={handleShowEditor}>
          {shouldShowEditor ? "Hide editor" : "Show editor"}
        </button>
      </div>
      {shouldShowEditor ? (
        <Editor
          handleInputChange={handleInputChange}
          handleSave={handleAddItem}
        />
      ) : null}
      {displayValues.map(({ value, shouldBeYellow, id }) => (
        <DisplayValue
          key={id}
          displayValue={value}
          id={id}
          handleClick={handleColorDisplayValue}
          handleRemove={handleRemoveDisplayValue}
          shouldBeYellow={shouldBeYellow}
        />
      ))}
    </div>
  );
};

export default ShoppingList;
