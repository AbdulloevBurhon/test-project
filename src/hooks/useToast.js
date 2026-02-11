// hooks/useToast.js
import { toast } from 'react-toastify';

export function useToast() {
  const showAsyncToast = async (asyncFn, messages = {}) => {
    const {
      loading = 'Загрузка...',
      success = 'Готово!',
      error = 'Ошибка'
    } = messages;

    const toastId = toast.loading(loading);
    
    try {
      const result = await asyncFn();
      toast.update(toastId, {
        render: success,
        type: 'success',
        isLoading: false,
        autoClose: 3000
      });
      return result;
    } catch (err) {
      toast.update(toastId, {
        render: error,
        type: 'error',
        isLoading: false,
        autoClose: 3000
      });
      throw err;
    }
  };

  return { showAsyncToast };
}