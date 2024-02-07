import GetAvatar from './GetAvatar.jsx';
import '../scss/layout/Form.scss';
import Card from './Card.jsx';
import PropTypes from 'prop-types';

function Form({
  handleInput,
  setFormData,
  formData,
  handleClickCreateCard,
  hidden
}) {

  return (
    <section className="form">
      <h2 className="form__h2">Información</h2>

      <fieldset className="project">
        <section className="askInfo">
          <p className="askInfo__subtitle">Cuéntanos sobre el proyecto</p>
          <hr className="askInfo__line" />
        </section>
        <input
          value={formData.name}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Nombre del proyecto"
          name="name"
          id="nameId"
          maxlength="30"
        />
        <input
          value={formData.slogan}
          onChange={handleInput}
          className="project__input"
          type="text"
          name="slogan"
          id="sloganId"
          placeholder="Slogan"
          maxlength="30"
        />
        <input
          value={formData.repo}
          onChange={handleInput}
          className="project__input"
          type="text"
          name="repo"
          id="repoId"
          placeholder="Repo"
          maxlength="30"
        />
        <input
          value={formData.demo}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Demo"
          name="demo"
          id="demoId"
          maxlength="30"
        />
        <input
          value={formData.technologies}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="techId"
          maxlength="30"
        />
        <textarea
          value={formData.desc}
          onChange={handleInput}
          className=" project__textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="descId"
          maxlength="150"
        ></textarea>
      </fieldset>

      <fieldset className="project">
        <section className="askInfo">
          <p className="askInfo__subtitle">Cuéntanos sobre la autora</p>
          <hr className="askInfo__line" />
        </section>

        <input
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Nombre"
          name="autor"
          id="authorId"
          maxlength="30"
        />
        <input
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="jobId"
          maxlength="30"
        />
      </fieldset>

      <section className="buttonImg">
        <GetAvatar  
          setFormData = {setFormData}
          text ="Subir foto de proyecto"
          name = "photo"
          formData={formData}
          
        />
        <GetAvatar     
          setFormData = {setFormData}
          text = "Subir foto de autora"
          name = "image"  
          formData={formData}   
        />
      </section>

      <section className="buttonImgCrear">
        <button
          className="buttonImgCrear__large"
          onClick={handleClickCreateCard}
          {...hidden}
        >
          Crear Tarjeta
        </button>
      </section>

      <Card />
    </section>
  );
}

Form.propTypes = {
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired, 
  handleInput: PropTypes.func.isRequired,
  handleClickCreateCard: PropTypes.func.isRequired,
  hidden: PropTypes.string.isRequired
};
export default Form;
