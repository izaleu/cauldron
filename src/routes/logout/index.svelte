<script>
    import { logout } from '../../auth/firebase';
    logout().finally(() => {
        location.replace('/');
    });
</script>