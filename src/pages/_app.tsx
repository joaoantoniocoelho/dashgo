import type {AppProps} from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "../styles/theme";
import {SidebarDrawerProvider} from "../contexts/SidebarDrawerContext";
import {makeServer} from "../services/mirage";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

if(process.env.NODE_ENV === 'development') {
    makeServer();
}

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider resetCSS={true} theme={theme}>
                <SidebarDrawerProvider>
                    <Component {...pageProps} />
                </SidebarDrawerProvider>
            </ChakraProvider>

            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}
