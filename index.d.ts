declare module 'vue-the-mask' {
    /** Declaration file generated by dts-gen */

    export const tokens: {
        "!": {
            escape: boolean;
        };
        "#": {
            pattern: RegExp;
        };
        A: {
            pattern: RegExp;
            transform: any;
        };
        S: {
            pattern: RegExp;
        };
        X: {
            pattern: RegExp;
        };
        a: {
            pattern: RegExp;
            transform: any;
        };
    };

    export const version: string;

    export function mask(e: any, t: any): void;

    export namespace TheMask {
        const name: string;

        const props: {
            mask: {
                required: boolean;
                type: any[];
            };
            masked: {
                default: boolean;
                type: any;
            };
            tokens: {
                default: any;
                type: any;
            };
            value: any[];
        };

        const staticRenderFns: any[];

        function data(): any;

        function render(): any;

        namespace computed {
            function config(): any;

            namespace config {
                const prototype: {
                };

            }

        }

        namespace data {
            const prototype: {
            };

        }

        namespace directives {
            function mask(e: any, t: any): void;

            namespace mask {
                const prototype: {
                };

            }

        }

        namespace methods {
            function onInput(e: any): void;

            function refresh(e: any): void;

            namespace onInput {
                const prototype: {
                };

            }

            namespace refresh {
                const prototype: {
                };

            }

        }

        namespace render {
            const prototype: {
            };

        }

        namespace watch {
            function masked(): void;

            function value(e: any): void;

            namespace masked {
                const prototype: {
                };

            }

            namespace value {
                const prototype: {
                };

            }

        }

    }

    export namespace mask {
        const prototype: {
        };

    }


}