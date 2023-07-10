import { createStyles } from '@mantine/styles';

export default createStyles({


  AppContainer: {
    marginTop: '2em',
    marginBottom: '2em',
  },

  AppHeader: {
    marginTop: '2em',
    marginBottom: '2em',
    fontWeight: 700,
  },

  taskStyle: {
    marginBottom: '1em',
  },

  textDecoration: (status) => ({
    textDecoration: status ? 'line-through' : 'none',
  }),

  iconsWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
