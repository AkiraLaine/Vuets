# Vuets
A Vue, TypeScript ready boilerplate using class-style components

*Usage*
```bash
# Download vue-cli and Vuets template
npm i -g vue-cli
vue init akiralaine/vuets <PROJECT_NAME>

# Install dependencies
cd <PROJECT_NAME>
yarn (or npm i)
yarn run dev (or npm run dev)
```

### What's a class-style component?
Vuets uses [vue-class-component](https://github.com/vuejs/vue-class-component) to enable the following
```js
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import Intro from './components/Intro'

@Component({
  components: {
    Intro
  }
})
export default class App extends Vue {
  // data
  appName : string = 'vuets'

  // lifecycle hooks
  mounted () {
    this.printToConsole()
  }

  // methods
  printToConsole () {
    console.log('Welcome to Vuets')
  }

  // computed
  get properName () {
    return `${this.appName[0].toUpperCase()}${this.appName.slice(1)}`
  }
}
</script>
```

### What's different?
Data
--
Normal Syntax:
```js 
data () {
  return {
    foo: 'bar'
  }
}
```
Class syntax:
```js 
foo = 'bar'
```
Using types:
```js
foo : string = 'bar'
```

Methods
--
Methods are the same except they don't go in a `methods` object

Computed
--
Like methods, computed properties don't go in a `computed` object. But you must specify a `getter` like so:
```js
get someProp () {
  return 'hello'
}
```
using types:
```js 
get sommeProp () : string {
  return 'hello'
}
```
Props / Watchers / Components
--
Unlike everything else, the above are specified in your `Component` decorator.
```jsx
import SomeComponent from './SomeComponent'

@Component({
  components: {
    SomeComponent
  }
  props: ['someProp'],
  watch: {
    'foo' (val) {
      console.log(val)
    }
  }
})
```