import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Header = ({ currentStep, goBackToStep, formSubmitted, showNavMenu }) => {
  const headerSteps = ['Início', 'Informações Pessoais', 'Contato', 'Pacotes', 'Revisão', 'Pagamento'];
  const navigateTo = useNavigate();

  const handleStepChange = (newStep) => {
    if (window.location.pathname === '/sucesso') {
      navigateTo('/');
      return;
    }

    if (formSubmitted) {
      return;
    }

    if (newStep <= currentStep) {
      goBackToStep(newStep);
    }
  };

  return (
    <header className="form__header">
      <h2>
        <a href="/">ACAMPAMENTO IPBV 2025</a>
      </h2>
      {showNavMenu && (
        <Breadcrumb className="mt-4">
          {headerSteps.map((step, index) => (
            <Breadcrumb.Item key={index} active={currentStep === index} onClick={() => handleStepChange(index)}>
              {step}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      )}
    </header>
  );
};

Header.propTypes = {
  currentStep: PropTypes.number.isRequired,
  goBackToStep: PropTypes.number.isRequired,
  formSubmitted: PropTypes.bool,
  showNavMenu: PropTypes.bool,
};

export default Header;
