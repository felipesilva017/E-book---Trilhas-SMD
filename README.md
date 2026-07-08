# 📚 E-Book Interativo

Uma aplicação web interativa e elegante para leitura de e-books com efeito de virar páginas realista, narração de áudio e design responsivo. Construída com React, Vite e Tailwind CSS.

## ✨ Funcionalidades

### 📖 Experiência de Leitura Imersiva
- **Efeito de Virar Páginas**: Interface realista que simula o comportamento de um livro físico ao virar as páginas
- **Múltiplas Páginas**: 19 páginas no total, incluindo capa, páginas de narração e 9 páginas de conteúdo
- **Design Elegante**: Layout com gradiente estilizado e sombras sofisticadas para uma experiência visual premium

### 🔊 Narração de Áudio
- **Narração Sincronizada**: Áudio automático que toca ao navegar para páginas específicas
- **Controle de Reprodução**: Pause automático e troca de áudio ao mudar de página
- **Reprodução Sob Demanda**: Toque com Seta para cima para reproduzir a narração novamente

### ⌨️ Navegação Intuitiva
- **Controle por Teclado**:
  - **Seta Direita** (→): Avança para a próxima página
  - **Seta Esquerda** (←): Volta para a página anterior
  - **Seta Para Cima** (↑): Reproduz a narração da página atual
- **Suporte a Touch**: Gestos de toque total em dispositivos móveis
- **Navegação Responsiva**: Funcionamento perfeito em diferentes tamanhos de tela

### � Controle por Gestos com Arduino e Processing
- **Sensor de Gestos**: Integração com sensor Adafruit APDS9960 via Arduino para detecção de movimentos
- **Comunicação Serial**: Arduino comunica-se com o PC via porta serial (COM12, 115200 baud)
- **Middleware Processing**: Aplicação Processing recebe sinais do Arduino e os converte em comandos de teclado
- **Experiência Hands-Free**: Navegue no e-book apenas com gestos no ar (cima, baixo, esquerda, direita)

### �🎨 Design Responsivo
- **Adaptativo**: A aplicação se ajusta automaticamente ao tamanho da janela
- **Otimizado para Desktop e Mobile**: Experiência consistente em todos os dispositivos
- **Layout Centralizado**: Apresentação elegante em qualquer resolução

### 🖼️ Conteúdo Visual Rico
- **Imagens Integradas**: Cada página de conteúdo contém ilustrações e gráficos relevantes
- **Estrutura Organizada**: Alternância entre páginas de narração e conteúdo para melhor compreensão
- **Temas Diversos**: Cobre tópicos como desenvolvimento de jogos, programação, design thinking e muito mais

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação abrirá em `http://localhost:5173`

## 📦 Dependências Principais

- **React 19**: Framework JavaScript para construção da interface
- **Vite**: Construtor moderno e rápido
- **react-pageflip 2.0.3**: Biblioteca para efeito realista de virar páginas
- **Tailwind CSS 4**: Framework CSS utilitário para estilização
- **ESLint**: Análise estática de código

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Análise de qualidade de código
npm run lint

# Prévia do build de produção
npm run preview
```

## 📂 Estrutura do Projeto

```
ebook/
├── src/
│   ├── components/
│   │   └── book/
│   │       ├── FlipPage.jsx              # Componente wrapper para cada página
│   │       ├── PageFrame.jsx             # Moldura de página
│   │       ├── ChapterPageContent.jsx    # Conteúdo de capítulo
│   │       ├── CoverPageContent.jsx      # Conteúdo da capa
│   │       ├── NarrationPageContent.jsx  # Conteúdo de narração
│   │       ├── VisualAccents.jsx         # Elementos visuais decorativos
│   │       └── pages/
│   │           ├── CoverPage.jsx         # Página de capa
│   │           ├── NarrationPage.jsx     # Páginas de narração
│   │           └── ContentPage0X.jsx     # Páginas de conteúdo (9 páginas)
│   ├── assets/                           # Imagens e áudio
│   ├── App.jsx                           # Componente principal
│   ├── main.jsx                          # Ponto de entrada
│   └── index.css                         # Estilos globais
├── public/                               # Arquivos estáticos públicos
├── package.json                          # Configuração do projeto
├── vite.config.js                        # Configuração do Vite
├── eslint.config.js                      # Configuração do ESLint
├── processing/
│   └── middleware.java                   # Middleware Processing para comunicação com Arduino
└── arduino/
    └── hardware_arduino.ino              # Código para microcontrolador Arduino com sensor de gestos
```

## 🔌 Integração Arduino + Processing

### Visão Geral da Arquitetura

O projeto integra hardware e software para permitir **navegação por gestos sem contato**:

```
Sensor APDS9960 → Arduino → Serial COM12 → Processing → Simula Teclas → E-book React
```

### 🤖 Arduino (hardware_arduino.ino)

Código responsável por capturar gestos via sensor e transmitir para o computador:

- **Hardware**: Arduino com sensor Adafruit APDS9960
- **Sensor**: Detecta movimentos em 4 direções
  - 👆 UP: Gesto para cima
  - 👇 DOWN: Gesto para baixo
  - 👈 LEFT: Gesto para esquerda
  - 👉 RIGHT: Gesto para direita
- **Comunicação**: Serial a 115200 baud
- **Funcionalidade**: 
  - Inicializa sensor de proximidade e detecção de gestos
  - Lê continuamente movimentos detectados
  - Envia comando de gesto via porta serial

### ⚙️ Processing (middleware.java)

Aplicação intermediária que recebe sinais do Arduino e controla o teclado:

- **Comunicação Serial**: Conecta à porta COM12 e aguarda comandos
- **Conversão de Sinais**: Transforma comandos de gestos em simulated key presses
- **Mapeamento de Teclas**:
  - LEFT → Seta Esquerda
  - RIGHT → Seta Direita
  - UP → Seta Para Cima
  - DOWN → Seta Para Baixo
- **Interface**: Simples display informando que está aguardando gestos
- **Automação**: Usa `java.awt.Robot` para simular pressionamento de teclas

### 🔧 Como Configurar

#### Pré-requisitos
- Arduino IDE instalado
- Processing IDE instalado
- Biblioteca Adafruit APDS9960 (instale via Arduino IDE)
- Placa Arduino com sensor APDS9960

#### Passos
1. Carregue `arduino/hardware_arduino.ino` no Arduino
2. Identifique a porta COM do Arduino (verifique em `Serial.list()`)
3. Atualize a porta em `processing/middleware.java` se necessário (linha: `porta = new Serial(this, "COM12", 115200);`)
4. Execute o código Processing
5. A aplicação React reconhecerá os comandos de teclado automaticamente

### 📊 Fluxo de Dados

1. **Usuário faz gesto** no ar próximo ao sensor
2. **Arduino detecta** o movimento com o APDS9960
3. **Microcontrolador envia** comando via serial (ex: "LEFT\n")
4. **Processing recebe** o comando na porta serial
5. **Processing simula** pressionamento da tecla correspondente
6. **React recebe** o evento de teclado
7. **Página do e-book** muda automaticamente

## 🎯 Fluxo de Navegação

1. **Página 1**: Capa do e-book
2. **Páginas Pares (2, 4, 6...)**: Páginas de narração com áudio
3. **Páginas Ímpares (3, 5, 7...)**: Páginas de conteúdo com imagens e texto

## 💡 Como Adicionar Novas Páginas

1. Crie um novo componente em `src/components/book/pages/ContentPageXX.jsx`
2. Importe o componente em `App.jsx`
3. Adicione uma entrada ao array `pageSequence` com a chave e componente
4. Se necessário, adicione narração ao objeto `narrationByPage`

## 🎵 Como Adicionar Narração de Áudio

1. Coloque o arquivo de áudio em `src/assets/`
2. Importe o arquivo em `App.jsx`
3. Adicione uma entrada ao objeto `narrationByPage`:
   ```javascript
   const narrationByPage = {
     pageNumber: importedAudioFile,
   }
   ```

## 🌐 Compatibilidade

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Navegadores móveis modernos

## 📱 Otimizações para Mobile

- Suporte completo a gestos de toque
- Responsividade em telas pequenas (mínimo 320px)
- Scroll sincronizado com virar de páginas

## 🔒 Performance

- Build otimizado com Vite
- Lazy loading de áudio
- Renderização eficiente com React
- Estilos otimizados com Tailwind CSS

## � Troubleshooting - Arduino e Processing

### Problemas Comuns

#### ❌ "Port COM12 does not exist" em Processing
**Solução:**
1. Abra Arduino IDE e verifique a porta do Arduino em **Tools → Port**
2. Atualize a porta em `processing/middleware.java` com o valor correto
3. Certifique-se de que a porta está disponível (não em uso por outro programa)

#### ❌ Arduino não detecta o sensor APDS9960
**Solução:**
1. Verifique as conexões I2C (SDA e SCL)
2. Instale a biblioteca Adafruit APDS9960 via Arduino IDE: **Sketch → Include Library → Manage Libraries**
3. Verifique se o endereço I2C é 0x39 (padrão)
4. Use o exemplo "APDS9960_Gesture_Sensor" para testar

#### ❌ Processing não recebe dados do Arduino
**Solução:**
1. Verifique a taxa de baud: deve ser **115200** em ambos (Arduino e Processing)
2. Abra o Serial Monitor do Arduino IDE para confirmar se dados estão sendo enviados
3. Certifique-se de que o Arduino está programado corretamente
4. Verifique o cabo USB (alguns não são de dados, apenas de carga)

#### ❌ E-book não responde aos gestos
**Solução:**
1. Verifique se Processing está rodando (deve mostrar "Aguardando gestos...")
2. Confirme que as teclas estão sendo simuladas (teste manualmente com setas)
3. Certifique-se de que o navegador ou aplicação está com o foco (e-book deve estar ativo)
4. Verifique o console do Processing para mensagens de erro

### 📋 Checklist de Configuração

- [ ] Arduino IDE instalado com biblioteca Adafruit APDS9960
- [ ] Processing IDE instalado
- [ ] Arduino carregado com `hardware_arduino.ino`
- [ ] Processing configurado com a porta COM correta
- [ ] Taxa de baud em ambos definida como 115200
- [ ] Cabo USB conectado ao Arduino
- [ ] Sensor APDS9960 com conexões I2C corretas

## �📝 Licença

Este projeto está disponível sob a licença MIT.

## 👨‍💻 Desenvolvimento

Para contribuir com melhorias:

1. Crie uma branch para sua feature
2. Faça suas alterações
3. Execute `npm run lint` para verificar a qualidade do código
4. Envie um pull request

---

**Desenvolvido com ❤️ para uma experiência de leitura digital premium**
