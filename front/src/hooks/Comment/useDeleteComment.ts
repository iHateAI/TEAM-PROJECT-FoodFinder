import { useMutation } from 'react-query';
import { recipeCommentDelete } from '../../api/recipeFetcher';
import useSetAlert from '../useSetAlert';
import { ErrorType } from '../../types/error';

export default function useDeleteComment() {
  const { setAlertSuccess, setAlertError } = useSetAlert();

  const mutation = useMutation(recipeCommentDelete, {
    onSuccess: ({ message }) => {
      setAlertSuccess({ success: message });
      location.reload();
    },
    onError: (error: ErrorType) => {
      const errorMessage = error.response.data.message;
      setAlertError({ error: errorMessage });
    },
  });

  return mutation;
}
