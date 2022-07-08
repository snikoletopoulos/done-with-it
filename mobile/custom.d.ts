import { RootTabParamList } from "./app/navigation/types";

declare global {
	namespace ReactNavigation {
		//eslint-disable-next-line @typescript-eslint/no-empty-interface
		interface RootParamList extends RootTabParamList {}
	}
}
