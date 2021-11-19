import React from 'react';

export const UseFetchApi = (url) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`/api/${url}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setIsLoading(false));
  }, [url]);
  return { data, isLoading };
};
