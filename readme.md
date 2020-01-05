# [WIP] Salt [![Build Status](https://travis-ci.org/alexandremasy/salt.svg?branch=master)](https://travis-ci.org/alexandremasy/salt) [![Code Climate](https://codeclimate.com/github/alexandremasy/salt.svg)](https://codeclimate.com/github/alexandremasy/salt)

> Add some flavor to your product design workflow

## Build

1. Clone the repository
2. Run
```
sass src/salt.scss build/salt.css
```

## Documentation

Take a look at the [documentation](https://github.com/alexandremasy/salt/wiki)




## Todo

- Scope variables
- Sass vs css variable
- Generation loop only on application mode. On demand for the dsm mode



## Settings



## Functions

Create an api layer that retrieve the values from the token to feed them to the requested call.

| Tokens                | Function         |
| --------------------- | ---------------- |
| colors                | color(name)      |
| fonts                 | font(name)       |
| font-size             | font(size)       |
| border-radius         | radius(size)     |
| box-shadow            | shadow(name)     |
| space (width, height) | size(name)       |
| opacity               | opacity(name)    |
| z-index               | z(name)          |
| line-height           | leading(name)    |
| transition            | duration(name)   |
| media query           | breakpoint(name) |