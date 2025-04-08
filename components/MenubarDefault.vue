
<template>
    <div class="card">
        <Menubar :model="items">
        <template #end>
            <div class="flex items-center gap-2">
                <Button label="Login" severity="secondary" variant="text" raised />
                <Button label="Registrar-se" severity="success" variant="text" raised />
                <InputText placeholder="Buscar" type="text" class="w-32 sm:w-auto" />
            </div>
        </template>
    </Menubar>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Início',
                    icon: 'pi pi-home'
                },
                {
                    label: 'Features',
                    icon: 'pi pi-star'
                },
                {
                    label: 'Sobre',
                    icon: 'pi pi-envelope'
                },
                {
                    label: 'Contato',
                    icon: 'pi pi-envelope'
                }
            ]
        };
    }
};
</script>
