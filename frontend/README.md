# Organização do Projeto

Este documento define as boas práticas de código e a organização de pastas da aplicação para manter o projeto limpo, compreensível e padronizado entre todos da equipe.

# Boas Práticas de Código

### Última linha em branco

Sempre deixe uma **linha em branco no final dos arquivos**.

### Ordem de importações

A ordem das importações deve seguir a seguinte hierarquia:

1. **Bibliotecas de terceiros e hooks**
2. **Serviços (APIs, helpers, configs)**
3. **Componentes, estilizações e outros**

#### 💡 Exemplo:

```tsx
// 1.
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
// 2.
import { api } from '@/services/api';
// 3.
import { Button } from '@/components/Button';
import './style.css';
```

### Estrutura de um arquivo React

```tsx
// 1. Importações.
import { useEffect } from 'react';
import './style.css';

// 2. Tipagens (se houver).
type Props = {
    title: string;
};

// 3. Componente.
function Navbar({ title }: Props) {
    useEffect(() => {
        console.log('Navbar carregado');
    }, []);

    return (
        <nav className="navbar">
            <h1>{title}</h1>
        </nav>
    );
}
// 4. Exportação.
export default Navbar;
```

### Estrutura de Pastas

```
src/
├── components/
│   └── Navbar/
│       ├── index.tsx
│       └── style.css
├── pages/
│   └── Home/
│       ├── index.tsx
│       ├── style.css
│       └── routes.tsx
├── routes/
│   ├── lazyRoutes.tsx
│   └── routes.tsx
```

#### Components

Cada componente fica em sua própria pasta, com nome capitalizado (Navbar, Sidebar, etc).

Dentro de cada pasta, haverá:
index.tsx → O código do componente.
style.css → Estilo específico do componente.

#### Pages

Mesmo padrão do components, porém dedicado a páginas completas.

Cada página possui um arquivo routes.tsx que define as rotas relacionadas àquela página, utilizando carregamento assíncrono (lazy) para otimizar a performance da aplicação.

#### Exemplo

```tsx
import { lazy } from 'react';

const Home = lazy(() => import('./index'));

const homeRoutes = [{ path: '/home', component: Home }];

export default homeRoutes;
```

Esse arquivo exporta as rotas da página em formato de array. Ele é importado no routes/lazyRoutes.tsx, que agrupa todas as rotas do projeto:

#### Exemplo

```tsx
import homeRoutes from '../pages/Home/routes';

const routes = [...homeRoutes];

export default routes;
```

Em seguida, routes/routes.tsx consome essas rotas e as renderiza no react-router-dom.
