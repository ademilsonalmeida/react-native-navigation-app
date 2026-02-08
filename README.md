# Navigation App

Aplicativo React Native demonstrando diferentes padrões de navegação com [React Navigation](https://reactnavigation.org/).

## Sobre o Projeto

Este projeto apresenta três implementações de navegação que podem ser facilmente alternadas:

- **Stack Navigation** - Navegação em pilha tradicional
- **Drawer Navigation** - Menu lateral deslizante
- **Bottom Tabs** - Abas na parte inferior da tela

## Tecnologias

- React Native 0.81
- Expo 54
- React Navigation 7
- TypeScript

## Estrutura do Projeto

```
src/
├── app/                  # Telas
│   ├── Home.tsx
│   └── Product.tsx
├── components/           # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Title.tsx
│   └── ButtonIcon.tsx
├── routes/               # Configuração de navegação
│   ├── index.tsx         # Router principal
│   ├── StackRoutes.tsx
│   ├── DrawerRoutes.tsx
│   └── BottomRoutes.tsx
└── types/
    └── navigation.d.ts   # Tipagem das rotas
```

## Instalação

```bash
# Clone o repositório
git clone https://github.com/ademilsonalmeida/react-native-navigation-app.git

# Instale as dependências
npm install

# iOS (macOS apenas)
cd ios && pod install && cd ..
```

## Executando

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios
```

## Alternando entre Navegadores

Para trocar o tipo de navegação, edite `src/routes/index.tsx`:

```tsx
export function Routes() {
  return (
    <NavigationContainer>
      {/* Descomente a navegação desejada */}

      {/* <StackRoutes /> */}
      <DrawerRoutes />
      {/* <BottomRoutes /> */}
    </NavigationContainer>
  )
}
```

## Licença

MIT
