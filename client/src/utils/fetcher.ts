import {Fetcher} from "swr";

export const fetcher: Fetcher<any, any> = (args: any) => fetch(args).then((res) => res.json());
