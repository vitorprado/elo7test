Solução to teste da elo7

Primeiramente desculpe pelo unico commit, esqueci de colocar o git no inicio e estava meio perdido com as coisas do `React-Native`.

Escolhi fazer em `RN` porque não tenho muita experiencia com `iOS` e precisaria instalar tudo aqui na maquina ainda, e fiquei com pé atrás de me enroscar nas coisas do `iOS`. Mesmo fazendo essa escolha eu tbm não sabia muito de `RN`, penei em algumas coisas:

1 - posicionar as views foi bem dificil das primeiras.
2 - status bar e toolbar me pareceu um problema, então fiz um `Component` que imita a barra (só testei no Android).
3 - ImageView com `string` dinamica não funciona no `RN`, então em cada componente que precisou disso tive que montar um dicionario que traduz o texto em uma imagem.

Pra atualizar as informações que vem na tela utilizei o firebase (se vocês quiserem acesso eu dou), tem um `json` identico aos dados do firebase no `root` do projeto.

(commitei as credenciais do firebase pq não acho que seja um problema alguem olhar)
