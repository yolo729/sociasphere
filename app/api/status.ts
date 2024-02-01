let l_status: number = 1;

export const getStatus = async (): Promise<number> => {
  return l_status;
};

export const setStatus = async (_status: number): Promise<number> => {
  l_status = _status;
  return l_status;
};
