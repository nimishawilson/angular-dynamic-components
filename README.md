## Angular Dynamic Components
Dynamic components in Angular are components that are created and inserted into the DOM at runtime, rather than being statically declared in the template. This allows for more flexible and reusable code, enabling scenarios like dynamically loading different components based on user interactions, data fetched from a server, or configuration.

### AngularDynamicComponents using ngComponentOutlet

ngComponentOutlet is a directive in Angular that allows you to dynamically load a component at runtime. It is part of Angular's CommonModule and provides a powerful way to insert a component into the DOM, especially useful in scenarios where the component to be loaded is determined dynamically, such as in dynamic dashboards, tabbed interfaces, or when working with dynamic content fetched from a server.

```
<ng-container
        *ngComponentOutlet="currentAd.component; inputs: currentAd.inputs"
      />
```

