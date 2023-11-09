import * as React from 'react';
import { Context } from '../state/Context';
import { AdContextType, Banner, Ingredient } from '../types/AdTypes';

//TEST FÖR BANNER

const TestForm: React.FC = () => {
  console.log('hej');
  //const { savedBanner } = React.useContext(Context) as AdContextType;
  const contextValue = React.useContext(Context) as AdContextType;
  const { savedBanner } = contextValue || {};
  console.log('savedBanner:', savedBanner);
  const [formData, setFormData] = React.useState<Banner | NonNullable<unknown>>({});
  console.log("formData", formData)
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleBanner = (e: React.FormEvent, formData: Banner | any) => {
    e.preventDefault();
    console.log("formData", formData)
    savedBanner(formData);
    console.log("savedBanner", savedBanner)
  };
  return (
    <form className="Form" onSubmit={(e) => handleBanner(e, formData)}>
      <div>
        <div>
          <label htmlFor="caption">Caption</label>
          <input onChange={handleForm} type="text" id="caption" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
        <div>
          <label htmlFor="mediaUrl">URL</label>
          <input onChange={handleForm} type="text" id="mediaUrl" />
        </div>
        <div>
          <label htmlFor="link">Button link</label>
          <input onChange={handleForm} type="text" id="link" />
        </div>
        <div>
          <label htmlFor="buttonText">Button text</label>
          <input onChange={handleForm} type="text" id="buttonText" />
        </div>
        <div>
          <label htmlFor="buttonColor">Button color</label>
          <input onChange={handleForm} type="text" id="buttonColor" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Banner</button>
    </form>
  );
};
export default TestForm;
