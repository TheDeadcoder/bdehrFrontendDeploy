<!-- flowchart.svelte -->
<!-- ./src/assets/images/mainlogo.png -->

<!-- Flowchart.svelte -->

<!-- Flowchart.svelte -->

<!-- flowchart.svelte -->

<script>
    // Import your image paths here
</script>

<div class="tree">
    <!-- Root (Company Logo) -->
    <div class="node">
        <img
            src="./src/assets/images/mainlogo.png"
            alt="Company Logo"
            class="icon"
        />
        <p>Company Logo</p>
    </div>

    <!-- Leaves -->
    <div class="leaf">
        <!-- Doctor -->
        <div class="node">
            <img
                src="./src/assets/images/mainlogo.png"
                alt="Doctor"
                class="icon"
            />
            <p>Doctor</p>
        </div>

        <!-- Lab -->
        <div class="node">
            <img
                src="./src/assets/images/mainlogo.png"
                alt="Lab"
                class="icon"
            />
            <p>Lab</p>
        </div>

        <!-- Hospital -->
        <div class="node">
            <img
                src="./src/assets/images/mainlogo.png"
                alt="Hospital"
                class="icon"
            />
            <p>Hospital</p>
        </div>

        <!-- Administrator -->
        <div class="node">
            <img
                src="./src/assets/images/mainlogo.png"
                alt="Administrator"
                class="icon"
            />
            <p>Administrator</p>
        </div>
    </div>
</div>

<style>
    .tree {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
    }

    .node {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }

    .icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .leaf {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
