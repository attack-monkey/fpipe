# fpipe
fsharp style pipe for typescript

An fsharp style pipe for typescript (default to arity 10)

## Install

```

npm i @attack-monkey/fpipe

```

## Usage

I like Ramda... but there pipe / compose is off for my liking.

Ramda pipe is essentially an fsharp compose and Ramda compose is just an fsharp right to left compose.

This pipe is an fsharp pipe.

```typescript

const inc = (a: number) => a + 1

const thirteen = pipe(10, inc, inc, inc)

```

^^ Which resembles

```fsharp

let thirteen = 10 |> inc |> inc |> inc

```
