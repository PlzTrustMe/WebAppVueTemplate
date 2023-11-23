import Routing from "./index.vue"

export const routes = [
    {
        path: "/",
        name: "HomePage",
        component: () => import("./HomePage")
    }
]

export {Routing}
