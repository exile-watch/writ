<p align="center">
  <a href="https://exile.watch">
    <img alt="exile.watch logo" src="https://avatars.githubusercontent.com/u/158840748?s=400&u=4c73ba2a9a2ebc70b01c6303d41e8571df84ec37&v=4" width="300" />
  </a>
</p>
<h1 align="center">
  Writ Design System
</h1>
<p align="center">
  <i><u>Writ</u>- without <a href="https://www.poewiki.net/wiki/The_Maven%27s_Writ" target="_blank">(The Maven's) Writ</a> there is no <a href="https://www.poewiki.net/wiki/The_Maven%27s_Crucible" target="_blank">(The Maven's) Crucible</a>, similarly without a <a href="https://github.com/exile-watch/writ">design system</a> there is no <a href="https://github.com/exile-watch/crucible">user facing website</a>.</i>
</p>

## Description

_Writ Design System_ is based on real-world codebases. 

_Writ Design System_ provides UI components to help contributors work more efficiently, and to make Writ` modules more cohesive.

While _Writ Design System_ is not yet accessibility friendly as well as not thoroughly tested, this will be changed in the future.

Aim of the _Writ Design System_ is to provide high quality experience for both, developers and users, that effortlessly scales across _Writ_ modules.

_Writ Design System_ is intended for all platforms and latest browsers. This may not be the case in the MVP (Minimum Viable Product) phase, but it sets a ground up for the future.

## Getting started

## Packages

```
packages
├─ components                     React components that are shared accross different modules
│  ├─ ComponentA                  React component directory
│  │  ├─ ComponentA.tsx           React component that shares the same name as directory
│  │  ├─ ComponentA.stories.tsx   ComponentA Storybook stories | See: https://storybook.js.org/docs/react/writing-stories/introduction
│  │  ├─ ComponentA.module.scss   ComponentA Styles
│  └─ ComponentB
├─ icons                          Icons that are shared accross different modules
│  ├─ svg                         Raw svgs
│  │  ├─ IconA.svg
│  │  ├─ IconB.svg
│  ├─ IconA.tsx                   Icon component converted from raw svg via `svgr` script
│  └─ IconB.tsx
└─ styles                         Global styles shared accross different modules
   ├─ styles.scss                 "index" scss file imported in `_app.tsx`
   ├─ mixins                      scss mixins | See: https://sass-lang.com/documentation/at-rules/mixin
   │   └─ mixinA.scss
   ├─ colors.scss                 List of all color variables (including light and dark themes)
   ├─ reset.scss                  Common approach to reset styles to avoid browser-specific issues and have a common styling ground
   └─ variables.scss              List of all variables that are not colors (z-index, line-height, font-size, spacing, etc)
```

## Got a Question or Problem?
