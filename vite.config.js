import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [react()],
  resolve: {
  	alias: [
    {
  		find: '@components',
  		replacement: path.resolve(__dirname, "src/components"),
  	},
  	{
  		find: "@pages",
  		replacement: path.resolve(__dirname, "src/pages")
  	},
  	{
  		find: "@utils",
  		replacement: path.resolve(__dirname, "src/utils")
  	},
  	{
  		find: "@helper",
  		replacement: path.resolve(__dirname, "src/helpers")
  	},
    {
      find: "@tags",
      replacement: path.resolve(__dirname, "src/components/tags")
    },
    {
      find: "@data",
      replacement: path.resolve(__dirname, "src/data")
    }
    ,
    {
      find: "@assets",
      replacement: path.resolve(__dirname, "src/assets")
    },
    {
      find: "@icons",
      replacement: path.resolve(__dirname, "src/assets/icons")
    },
    {
      find: "@logo",
      replacement: path.resolve(__dirname, "src/assets/logo")
    },
    {
      find: "@context",
      replacement: path.resolve(__dirname, "src/contexts")
    },
    {
      find: "@screenshots",
      replacement: path.resolve(__dirname, "src/assets/screenshots")
    }
  	]
  },
  server: {
  	port: 8020,
  	open: true,
  },
})
