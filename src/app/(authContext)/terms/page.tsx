import { Grid, Paper, Typography } from "@mui/material";

export default function TermsPage() {

    return (
        <Grid
            container
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                padding:"2%",
                backgroundColor: "white",
            }}
        >
            <Paper
                variant="outlined"
                sx={{
                    padding:"2%"
                }}
            >
                <Typography sx={{width:"100%"}}  variant="h2">Termos de Uso</Typography>

                <Typography sx={{width:"100%"}} >Bem-vindo ao Mind Plus. Ao acessar e usar este site, você concorda em cumprir e estar sujeito aos seguintes termos e condições de uso. Por favor, leia atentamente estes termos antes de utilizar nosso site.</Typography>

                <Typography sx={{width:"100%"}}  variant="h3">Aceitação dos Termos</Typography>
                <Typography sx={{width:"100%"}} >Ao acessar ou utilizar qualquer parte do site, você concorda em ficar vinculado a estes Termos de Uso. Se você não concorda com todos os termos e condições deste acordo, então você não pode acessar o site ou usar quaisquer serviços.</Typography>

                <Typography sx={{width:"100%"}}  variant="h3">Modificações dos Termos</Typography>
                <Typography sx={{width:"100%"}} >Reservamo-nos o direito de alterar, modificar ou substituir qualquer parte destes Termos de Uso a nosso exclusivo critério. É sua responsabilidade verificar periodicamente estas páginas para ver as mudanças. Seu uso continuado ou acesso ao site após a publicação de quaisquer alterações constitui aceitação dessas alterações.</Typography>

                <Typography sx={{width:"100%"}}  variant="h3">Uso do Site</Typography>
                <Typography sx={{width:"100%"}} >a. Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de, ou restrinja ou iniba o uso e aproveitamento do site por terceiros.</Typography>
                <Typography sx={{width:"100%"}} >b. Você não deve usar o site para transmitir ou enviar qualquer conteúdo que seja difamatório, ofensivo, fraudulento ou de outra forma ilegal.</Typography>
                <Typography sx={{width:"100%"}} >c. Você não deve tentar obter acesso não autorizado a qualquer parte do site, outros sistemas ou redes conectadas ao site.</Typography>

                <Typography sx={{width:"100%"}}  variant="h3">Propriedade Intelectual</Typography>
                <Typography sx={{width:"100%"}} >Todo o conteúdo presente neste site, incluindo, mas não se limitando a texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e software, é propriedade de Mind Plus ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais internacionais. </Typography>
                <Typography sx={{width:"100%"}}  variant="h3">Privacidade</Typography>
                <Typography sx={{width:"100%"}} >Seu uso do site também está sujeito à nossa Política de Privacidade. Por favor, revise nossa Política de Privacidade, que também rege o site e informa os usuários sobre nossas práticas de coleta de dados.</Typography>

                <Typography sx={{width:"100%"}}  variant="h3">Isenção de Garantias e Limitação de Responsabilidade</Typography>
                <Typography sx={{width:"100%"}} >a. O site é fornecido "como está" e "conforme disponível". Não garantimos que o site será ininterrupto, livre de erros ou que quaisquer defeitos serão corrigidos.</Typography>
                <Typography sx={{width:"100%"}} >b. Na máxima extensão permitida pela lei aplicável, Mind Plus não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar o site.</Typography>

                <Typography sx={{width:"100%"}}  variant="h3">Links para Sites de Terceiros</Typography>
                <Typography sx={{width:"100%"}} >Nosso site pode conter links para sites de terceiros que não são controlados por nós. Não temos controle sobre o conteúdo, políticas de privacidade ou práticas de quaisquer sites de terceiros e não assumimos qualquer responsabilidade por eles.</Typography>

                <Typography sx={{width:"100%"}}  variant="h3">Lei Aplicável</Typography>
                <Typography sx={{width:"100%"}} >Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem dar efeito a quaisquer princípios de conflitos de leis.</Typography>

                <Typography sx={{width:"100%"}}  variant="h3">Contato</Typography>
                <Typography sx={{width:"100%"}} >Se você tiver qualquer dúvida sobre estes Termos de Uso, entre em contato conosco pelo e-mail: arthur.hoengen@catolicasc.edu.br.</Typography>

                <Typography sx={{width:"100%"}} >Data de Vigência: 08/07/2024</Typography>
            </Paper>
        </Grid>
    )
}