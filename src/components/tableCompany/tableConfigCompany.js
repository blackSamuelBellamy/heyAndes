export const defaultOptions = darkTheme => {
  return ({
    typography: {
      fontFamily: 'monospace'
    },
    palette: {
      background: {
        paper: darkTheme ? '#001529' : '#FFF',
        default: darkTheme ? '#001529' : '#FFF',

      },
      mode: darkTheme ? 'dark' : 'light'
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: darkTheme ? '#003366' : '#FFF',
            color: darkTheme ? '#FFF' : '#000'
          }
        }
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            minWidth: '200px',
            maxWidth: '400px',
            padding: '10px',
            backgroundColor: darkTheme ? '#003366' : '#FFF'
          }
        }
      },

      MuiTableCell: {
        styleOverrides: {
          head: {
            padding: '5px 10px 5px 25px',
            background: darkTheme ? '#001529' : '#FFF'
          },
          body: {
            padding: '7px 40px',
            color: darkTheme ? '#e2e8f0' : '#000',
            background: darkTheme ? '#001529' : '#FFF'
          },
          footer: {
            background: darkTheme ? '#001529' : '#FFF'
          }

        }
      }
    }
  })
}