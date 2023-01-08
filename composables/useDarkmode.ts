export const useDarkmode = () => {
  let isActiveCookie = useCookie('darkmode').value === 'true';

  if (!isActiveCookie) {
    isActiveCookie = false;
  }

  const isActive = useState('isActive', () => {
    if (isActiveCookie) {
      return isActiveCookie;
    }
    return false;
  });

  watch(isActive, () => {
    isActiveCookie = isActive.value;
  });

  return {
    isActive,
  };
};
