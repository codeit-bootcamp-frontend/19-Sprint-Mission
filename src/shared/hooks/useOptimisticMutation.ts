import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UseOptimisticMutationVars<TData, TVariables, TCache> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  queryKey: readonly unknown[];
  optimisticUpdate: (oldData: TCache | undefined, variables: TVariables) => TCache;
}

interface MutationContext<TCache> {
  previous: TCache | undefined;
}

export const useOptimisticMutation = <TData, TVariables, TCache>({
  mutationFn,
  queryKey,
  optimisticUpdate,
}: UseOptimisticMutationVars<TData, TVariables, TCache>) => {
  const queryClient = useQueryClient();

  return useMutation<TData, Error, TVariables, MutationContext<TCache>>({
    mutationFn,

    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey });

      const previous = queryClient.getQueryData<TCache>(queryKey);

      queryClient.setQueryData<TCache>(queryKey, (old) => optimisticUpdate(old, variables));

      return { previous };
    },

    onError: (_error, _variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData<TCache>(queryKey, context.previous);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};
