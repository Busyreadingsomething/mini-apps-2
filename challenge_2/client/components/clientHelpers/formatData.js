const formatData = (data) => {
  const result = {};

  Object.keys(data).forEach((key) => {
    if (!key.includes('form') && key !== 'summary' && key !== 'start') {
      result[key] = data[key];
    }
  });

  return result;
};

export default formatData;
