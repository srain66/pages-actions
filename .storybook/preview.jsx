import { QueryClientProvider, QueryClient } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { MemoryRouter } from "react-router-dom";
import { queryClient } from "@/utils/query-client";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RecoilRoot>
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </RecoilRoot>
      </ChakraProvider>
    </QueryClientProvider>
  ),
];
