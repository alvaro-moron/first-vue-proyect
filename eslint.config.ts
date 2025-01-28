import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

const RULES: { OFF: 'off'; WARN: 'warn'; ERROR: 'error' } = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  skipFormatting,
  {
    rules: {
      'vue/no-unused-vars': RULES.WARN,
      'vue/multi-word-component-names': RULES.OFF,
      'vue/no-multiple-template-root': RULES.ERROR,
      'no-console': RULES.WARN,
      'no-debugger': RULES.ERROR,
    },
  }
)
