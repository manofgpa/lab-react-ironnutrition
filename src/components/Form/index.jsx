import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

export const Form = ({ handleOpenModal, handleNewFood }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleNewFood(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label has-text-white">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="has-text-danger">This field is required</span>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label has-text-white">Calories</label>
        <div className="control">
          <input
            className="input"
            type="text"
            {...register('calories', { required: true })}
          />
          {errors.calories && (
            <span className="has-text-danger">This field is required</span>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label has-text-white">Image Url</label>
        <div className="control">
          <input
            className="input"
            type="text"
            {...register('image', {
              required: true,
              pattern:
                /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/i,
            })}
          />
          {errors.image && (
            <span className="has-text-danger">This field must be an URL</span>
          )}
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
        <div className="control">
          <input
            className="button is-link is-light"
            onClick={handleOpenModal}
            type="button"
            value="Cancel"
          />
        </div>
      </div>
    </form>
  );
};
