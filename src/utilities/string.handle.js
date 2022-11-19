import PropTypes from 'prop-types';

const removeColonFromStart = (stringData) => {
  if (stringData.length !== 0 && stringData[0] === ',')
    return stringData.slice(1);
  return stringData;
};

removeColonFromStart.prototypes = PropTypes.string;

export { removeColonFromStart };
